import assert from 'assert';
import { Question } from '@testla/screenplay';
import { CheckMode } from '../../types';

export class Input extends Question<boolean> {
    private input?: unknown;

    private checkMode: CheckMode;

    private constructor(checkMode: CheckMode) {
        super();
        this.checkMode = checkMode;
    }

    public async answeredBy(): Promise<boolean> {
        let isEmpty: boolean | undefined;
        if (typeof this.input === 'string') {
            isEmpty = this.input.length === 0;
        } else if (Array.isArray(this.input)) {
            isEmpty = this.input.length === 0;
        } else if (typeof this.input === 'object' && this.input !== null) {
            isEmpty = Object.keys(this.input).length === 0;
        }
        if (isEmpty === undefined) {
            isEmpty = true;
        }
        assert.equal(isEmpty, this.checkMode === 'positive');
        return Promise.resolve(true);
    }

    /**
     * make the Question check for the positive.
     */
    static get is() {
        return new Input('positive');
    }

    /**
     * make the Question check for the negative.
     */
    static get isNot() {
        return new Input('negative');
    }

    public empty(input: unknown): Input {
        this.input = input;
        this.addToCallStack({ caller: 'empty', calledWith: { input } });
        return this;
    }
}
