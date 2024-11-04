#include "../include/array_helpers.h"
#include <node_api.h>
#include <stdlib.h>
#include <string.h>

/** Function to chunk the Generic array */
napi_value ChunkArray(napi_env env, napi_callback_info info) {
    // Parse arguments
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Verify if first argument is an array
    bool isArray;
    napi_is_array(env, args[0], &isArray);
    if (!isArray)
        return NULL;

    uint32_t arrayLength;
    napi_get_array_length(env, args[0], &arrayLength);

    // Get the chunk size
    int32_t chunkSize;
    napi_get_value_int32(env, args[1], &chunkSize);

    // Allocate space for the array elements to handle generic data
    void *arrayElements = malloc(arrayLength * sizeof(napi_value));
    napi_value element;

    for (uint32_t i = 0; i < arrayLength; ++i) {
        napi_get_element(env, args[0], i, &element);
        memcpy((napi_value *)arrayElements + i, &element, sizeof(napi_value));
    }

    // Perform chunking
    int chunkCount;
    Chunk *chunks = chunkArray(arrayElements, sizeof(napi_value), arrayLength, chunkSize, &chunkCount);

    // Convert C chunks to JavaScript arrays
    napi_value result;
    napi_create_array_with_length(env, chunkCount, &result);

    for (int i = 0; i < chunkCount; ++i) {
        napi_value chunkArray;
        napi_create_array_with_length(env, chunks[i].size, &chunkArray);

        for (int j = 0; j < chunks[i].size; ++j) {
            napi_set_element(env, chunkArray, j, ((napi_value *)chunks[i].elements)[j]);
        }
        napi_set_element(env, result, i, chunkArray);
    }

    // Clean up
    freeChunks(chunks, chunkCount);
    free(arrayElements);

    return result;
}

/** Function to create a unique array */
napi_value CreateUniqueArray(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    napi_value result_array;
    remove_duplicates(env, args[0], &result_array);

    return result_array;
}

/** Function to count non-repeating elements in an array */
napi_value CountNonRepeating(napi_env env, napi_callback_info args) {
    size_t argc = 2;
    napi_value argv[2];
    napi_value result;
    napi_get_cb_info(env, args, &argc, argv, NULL, NULL);

    // check if the first arg is an array
    bool is_array;
    napi_is_array(env, argv[0], &is_array);
    if (!is_array) {
        napi_throw_error(env, NULL, "First argument must be an array");
        return NULL;
    }

    // Check the type of elements (second arg is a string: "number" or "string")
    char type[10];
    size_t type_length;
    napi_get_value_string_utf8(env, argv[1], type, 10, &type_length);

    // get array length
    uint32_t array_length;
    napi_get_array_length(env, argv[0], &array_length);

    if (strcmp(type, "number") == 0) {
        int *arr = (int *)malloc(array_length * sizeof(int));
        if (!arr) {
            napi_throw_error(env, NULL, "Memory allocation failed");
            return NULL;
        }

        for (uint32_t i = 0; i < array_length; i++) {
            napi_value element;
            napi_get_element(env, argv[0], i, &element);
            int32_t num;
            napi_get_value_int32(env, element, &num);
            arr[i] = num;
        }

        int non_repeating_count = count_non_repeating(arr, array_length, sizeof(int), compare_int);

        free(arr);

        napi_create_int32(env, non_repeating_count, &result);
        return result;
    } else if (strcmp(type, "string") == 0) {
        char **arr = (char **)malloc(array_length * sizeof(char *));
        if (!arr) {
            napi_throw_error(env, NULL, "Memory allocation failed");
            return NULL;
        }

        for (uint32_t i = 0; i < array_length; i++) {
            napi_value element;
            napi_get_element(env, argv[0], i, &element);
            size_t str_size;
            napi_get_value_string_utf8(env, element, NULL, 0, &str_size);
            arr[i] = (char *)malloc((str_size + 1) * sizeof(char));
            napi_get_value_string_utf8(env, element, arr[i], str_size + 1, &str_size);
        }

        int non_repeating_count = count_non_repeating(arr, array_length, sizeof(char *), compare_string);

        for (uint32_t i = 0; i < array_length; i++) {
            free(arr[i]);
        }
        free(arr);

        napi_create_int32(env, non_repeating_count, &result);
        return result;

    } else {
        napi_throw_type_error(env, NULL, "Unsupported type");
        return NULL;
    }
}
