#include "../include/array_helpers.h"
#include <node_api.h>
#include <stdlib.h>
#include <string.h>

/** Function to sort the array with Bubble Sort */
napi_value BubbleSort(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    if (argc < 1) {
        napi_throw_error(env, NULL, "Array argument expected");
        return NULL;
    }

    // get array length
    uint32_t length;
    napi_get_array_length(env, args[0], &length);

    // Allocate space for array in C
    int *arr = (int *)malloc(length * sizeof(int));
    for (uint32_t i = 0; i < length; i++) {
        napi_value val;
        napi_get_element(env, args[0], i, &val);
        napi_get_value_int32(env, val, &arr[i]);
    }

    bubble_sort(arr, length);

    // Set sorted values back to JS array
    for (uint32_t i = 0; i < length; i++) {
        napi_value val;
        napi_create_int32(env, arr[i], &val);
        napi_set_element(env, args[0], i, val);
    }

    free(arr);

    return args[0];
}

/** Function to sort the array with Quick Sort */
napi_value QuickSort(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_status status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    if (status != napi_ok)
        return NULL;

    // Check if input is an array
    bool is_array;
    status = napi_is_array(env, args[0], &is_array);
    if (status != napi_ok || !is_array) {
        napi_throw_type_error(env, NULL, "Expected an array as input");
        return NULL;
    }

    // Get array length
    uint32_t length;
    status = napi_get_array_length(env, args[0], &length);
    if (status != napi_ok)
        return NULL;

    // Allocate memory for the array in C
    int *arr = (int *)malloc(length * sizeof(int));
    if (arr == NULL) {
        napi_throw_error(env, NULL, "Memory allocation failed");
        return NULL;
    }

    // Copy values from JavaScript array to C array
    for (uint32_t i = 0; i < length; i++) {
        napi_value element;
        status = napi_get_element(env, args[0], i, &element);
        if (status != napi_ok) {
            free(arr);
            return NULL;
        }

        int32_t value;
        status = napi_get_value_int32(env, element, &value);
        if (status != napi_ok) {
            free(arr);
            return NULL;
        }
        arr[i] = value;
    }

    // Perform quicksort on the array
    quick_sort(arr, 0, length - 1);

    // Overwrite the original JavaScript array with sorted values
    for (uint32_t i = 0; i < length; i++) {
        napi_value num;
        status = napi_create_int32(env, arr[i], &num);
        if (status != napi_ok) {
            free(arr);
            return NULL;
        }
        status = napi_set_element(env, args[0], i, num);
        if (status != napi_ok) {
            free(arr);
            return NULL;
        }
    }

    // Free the C array and return the sorted JavaScript array
    free(arr);
    return args[0];
}
