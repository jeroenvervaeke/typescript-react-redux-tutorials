interface ValueKeeper<T> {
    value: T;
}

function UnwrapValue<T>(keeper: ValueKeeper<T>) : T {
    return keeper.value;
}


let numberValueKeeper : ValueKeeper<number> = {
    value: 1,
};
let unwrappedNumber = UnwrapValue(numberValueKeeper);


let stringValueKeeper : ValueKeeper<string> = {
    value: '1',
}
let unwrappedString = UnwrapValue(stringValueKeeper);