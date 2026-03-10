import { Action } from '@testla/screenplay';

/**
 * Action Class. Pauses further test execution for a while. Does not require a particular Ability.
 */
export class Pause extends Action {
    private constructor(private ms: number) {
        super();
    }

    /**
     * Pause the execution of further test steps for a given interval in milliseconds.
     * @return {void} void
     */
    public async performAs(): Promise<void> {
        return new Promise((resolve): any => { setTimeout(resolve, this.ms); });
    }

    /**
     * Pause the execution of further test steps for a given interval in milliseconds.
     *
     * @param {number} ms interval in milliseconds.
     * @return {Pause} new Pause instance
     */
    public static for(ms: number): Pause {
        const instance = new Pause(ms);
        instance.setCallStackInitializeCalledWith({ ms });
        return instance;
    }
}
