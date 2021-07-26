export const APPLY_FILTER = "APPLY_FILTER"
export const REMOVE_FILTER ="REMOVE_FILTER"


export const ApplyFilter = (filterOpton) => {
    return {
        type: APPLY_FILTER,
        payload: filterOpton,
    }
}