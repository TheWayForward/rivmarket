import time_helper from "@/common/js/utils/time_helper";

function get_array_element_by_id(array, id) {
    if (!array.length) {
        return {
            is_empty: true,
            element: {}
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return {
                    is_empty: false,
                    found: true,
                    element: array[i]
                }
            }
        }
        return {
            is_empty: false,
            found: false
        }
    }
}

function delete_array_element_by_id(array, id) {
    if (!array.length) {
        return {
            is_empty: true,
            element: {}
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return {
                    is_empty: false,
                    found: true,
                    element: array.splice(i,1)
                }
            }
        }
        return {
            is_empty: false,
            found: false
        }
    }
}

function distribution_triple(array) {
    let array_1 = [], array_2 = [], array_3 = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 3 == 0) array_1.push(array[i]);
        else if ((i - 1) % 3 == 0) array_2.push(array[i]);
        else array_3.push(array[i]);
    }
    return {
        array_1,
        array_2,
        array_3
    }
}

export default {
    MB: 1048576,
    delete_array_element_by_id,
    distribution_triple
}