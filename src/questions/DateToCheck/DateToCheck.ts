import assert from 'assert';
import { Question } from '@testla/screenplay';
import { CheckMode } from '../../types';

type Mode = 'compare' | 'valid';

type Payload = {
    mode: Mode;
    compareDate?: Date;
    direction?: 'after' | 'equal' | 'before';
}

export class DateToCheck extends Question<boolean> {
    private date?: Date;

    private checkMode: CheckMode = 'positive';

    private payload: Payload = { mode: 'valid' };

    public async answeredBy(): Promise<boolean> {
        if (this.payload.mode === 'valid') {
            const isValid = !Number.isNaN((this.date as Date).getTime());
            assert.equal(isValid, this.checkMode === 'positive');
        } else {
            let comparisonResult: boolean;
            const compareDateTime = (this.payload.compareDate as Date).getTime();
            const dateTime = (this.date as Date).getTime();

            if (this.payload.direction === 'after') {
                comparisonResult = dateTime > compareDateTime;
            } else if (this.payload.direction === 'equal') {
                comparisonResult = dateTime === compareDateTime;
            } else {
                comparisonResult = dateTime < compareDateTime;
            }

            assert.equal(comparisonResult, this.checkMode === 'positive');
        }
        return Promise.resolve(true);
    }

    static whichIs(date: Date): DateToCheck {
        const instance = new DateToCheck();
        instance.date = date;
        instance.addToCallStack({ caller: 'whichIs', calledWith: { date } });
        return instance;
    }

    public get is() {
        this.checkMode = 'positive';
        this.addToCallStack({ caller: 'is' });
        return this;
    }

    static get is(): DateToCheck {
        const instance = new DateToCheck();
        instance.checkMode = 'positive';
        instance.date = new Date();
        return instance;
    }

    public get isNot() {
        this.checkMode = 'negative';
        this.addToCallStack({ caller: 'isNot' });
        return this;
    }

    static get isNot(): DateToCheck {
        const instance = new DateToCheck();
        instance.checkMode = 'negative';
        instance.date = new Date();
        return instance;
    }

    public get valid(): DateToCheck {
        this.payload = { mode: 'valid' };
        this.addToCallStack({ caller: 'valid' });
        return this;
    }

    public after(compareDate: Date = new Date()): DateToCheck {
        this.payload = { compareDate, mode: 'compare', direction: 'after' };
        this.addToCallStack({ caller: 'after', calledWith: { compareDate } });
        return this;
    }

    public before(compareDate: Date = new Date()): DateToCheck {
        this.payload = { compareDate, mode: 'compare' };
        this.addToCallStack({ caller: 'before', calledWith: { compareDate } });
        return this;
    }

    public equalTo(compareDate: Date = new Date()): DateToCheck {
        this.payload = { compareDate, mode: 'compare', direction: 'equal' };
        this.addToCallStack({ caller: 'equalTo', calledWith: { compareDate } });
        return this;
    }
}
