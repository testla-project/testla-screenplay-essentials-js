import assert from 'assert';
import { Question } from '@testla/screenplay';
import { CheckMode } from '../../types';

type Payload = {
    obj?: object;
    attribute?: string;
    value?: unknown;
};

export class Entity extends Question<boolean> {
    // eslint-disable-next-line
    private payload: Payload = {};

    private checkMode: CheckMode = 'positive';

    private constructor(checkMode: CheckMode) {
        super();
        this.checkMode = checkMode;
    }

    public async answeredBy(): Promise<boolean> {
        const { obj, attribute, value } = this.payload;

        if (!obj) {
            throw new Error('Object is not set');
        }

        if (!attribute) {
            throw new Error('Attribute is not set');
        }

        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            const attributeFound = obj.hasOwnProperty(attribute);

            assert.equal(attributeFound, this.checkMode === 'positive');
            return Promise.resolve(true);
        }

        // eslint-disable-next-line
        // @ts-ignore
        const attributeWithValueFound = obj[attribute] === value;

        assert.equal(attributeWithValueFound, this.checkMode === 'positive');
        return Promise.resolve(true);
    }

    /**
     * make the Question check for the errors.
     */
    static get has() {
        return new Entity('positive');
    }

    /**
     * make the Question check for the errors.
     */
    static get hasNot() {
        return new Entity('negative');
    }

    public attribute(obj: object, attribute: string): Entity {
        this.payload = { ...this.payload, obj, attribute };
        this.addToCallStack({ caller: 'attribute', calledWith: { obj, attribute } });
        return this;
    }

    public withValue(value: unknown): Entity {
        this.payload = { ...this.payload, value };
        this.addToCallStack({ caller: 'withValue', calledWith: { value } });
        return this;
    }
}
