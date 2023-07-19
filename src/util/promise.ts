export function getPromiseSettledResultValue<T>(result: PromiseSettledResult<T>) {
    return result.status == "fulfilled" ? result.value : null;
}