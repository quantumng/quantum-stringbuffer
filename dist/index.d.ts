export default class StringBuffer {
    private buffers;
    private length;
    private splChar;
    constructor(...arg: any[]);
    Restore(...arg: any[]): void;
    Append(...arg: any[]): boolean;
    Remove(...arg: any[]): string;
    Clear(): boolean;
    Replace(...arg: any[]): string;
    IndexOf(...arg: any[]): number;
    ToString(): string;
    Length(): number;
    IsEmpty(): boolean;
}
