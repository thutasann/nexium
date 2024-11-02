#include "../include/utils.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// ---------- Helpers
int **chunk_helper(const int *array, size_t array_length, size_t chunk_length, size_t *num_chunks);
void free_chunks(int **chunks, size_t num_chunks);

/** Function to chunk array */
napi_value ChunkArray(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Input validation
    bool is_array;
    napi_is_array(env, args[0], &is_array);
    if (!is_array)
        return NULL;

    uint32_t array_length;
    napi_get_array_length(env, args[0], &array_length);

    int chunk_length;
    napi_get_value_int32(env, args[1], &chunk_length);

    // Convert input JS array to C array
    int *array = (int *)malloc(array_length * sizeof(int));
    for (uint32_t i = 0; i < array_length; i++) {
        napi_value element;
        napi_get_element(env, args[0], i, &element);
        napi_get_value_int32(env, element, &array[i]);
    }

    // Chunk the array using helper
    size_t num_chunks;
    int **chunks = chunk_helper(array, array_length, chunk_length, &num_chunks);

    // Convert the chunks back to a JS array of arrays
    napi_value result;
    napi_create_array_with_length(env, num_chunks, &result);

    for (size_t i = 0; i < num_chunks; i++) {
        size_t current_chunk_length = (i + 1) * chunk_length <= array_length ? chunk_length : array_length - i * chunk_length;
        napi_value chunk_array;
        napi_create_array_with_length(env, current_chunk_length, &chunk_array);

        for (size_t j = 0; j < current_chunk_length; j++) {
            napi_value element;
            napi_create_int32(env, chunks[i][j], &element);
            napi_set_element(env, chunk_array, j, element);
        }

        napi_set_element(env, result, i, chunk_array);
    }

    // Free allocated memory
    free(array);
    free_chunks(chunks, num_chunks);

    return result;
}