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