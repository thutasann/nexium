#include "../include/array_helpers.h"
#include <node_api.h>
#include <stdlib.h>
#include <string.h>

/** Integer comparition function */
bool int_cmp(const void *a, const void *b) {
    return *(int *)a == *(int *)b;
}

/** String comparision function */
bool str_cmp(const void *a, const void *b) {
    return strcmp((char *)a, (char *)b) == 0;
}

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
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // retrieve the input array from JavaScript
    uint32_t input_length;
    napi_get_array_length(env, args[0], &input_length);
    void **input_array = malloc(input_length * sizeof(void *));

    for (size_t i = 0; i < input_length; i++) {
        napi_value elem;
        napi_get_element(env, args[0], i, &elem);
        // assuming input is an array of integers for this example
        int *value = malloc(sizeof(int));
        napi_get_value_int32(env, elem, value);
        input_array[i] = value;
    }

    size_t new_size;
    void **unique_array = create_unique_array(input_array, input_length, &new_size, int_cmp);

    // create a JavaScript array to hold the results
    napi_value result;
    napi_create_array_with_length(env, new_size, &result);
    for (size_t i = 0; i < new_size; i++) {
        napi_value elem;
        napi_create_int32(env, *(int *)unique_array[i], &elem);
        napi_set_element(env, result, i, elem);
        free(unique_array[i]); // Free the duplicated values
    }

    free(unique_array);
    free(input_array);

    return result;
}