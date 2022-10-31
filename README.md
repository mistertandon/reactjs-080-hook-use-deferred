## useDeferredValue

> This hook takes a single parameter which is the value you want setup your throttle/debounce on. This hook will then return a value which will be the deferred version of the value you pass in.

>  This means that when our name variable changes the deferredName will still stay the same since useDeferredValue will not immediately update the value of the deferredName. This allows time for our component to completely rerender with the new name value since our list will not try to update itself as it is waiting for the deferredName to change.