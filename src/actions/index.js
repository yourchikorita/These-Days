export const WRITE_OPEN_DIARY = 'WRITE_OPEN_DIARY';
export const WRITE_MY_DIARY = 'WRITE_MY_DIARY';
export const READ_OPEN_DIARY = 'READ_OPEN_DIARY';
export const READ_MY_DIARY = 'READ_MY_DIARY';


export function write_open_diary() {
    return {
        type: WRITE_OPEN_DIARY
    };
}
export function write_my_diary() {
    return {
        type: WRITE_MY_DIARY
    };
}
export function read_open_diary() {
    return {
        type: READ_OPEN_DIARY
    };
}
export function read_my_diary() {
    return {
        type: READ_MY_DIARY
    };
}

