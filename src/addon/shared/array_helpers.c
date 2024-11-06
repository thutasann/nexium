#include "../include/array_helpers.h"
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

/** Helper Function to chunk an array into smaller arrays (chunks) of specified size */
Chunk *chunkArray(void *array, int elementSize, int totalElements, int chunkSize, int *chunkCount) {
    *chunkCount = (totalElements + chunkSize - 1) / chunkSize; // Calculate chunk count
    Chunk *chunks = (Chunk *)malloc(*chunkCount * sizeof(Chunk));

    for (int i = 0; i < *chunkCount; ++i) {
        int start = i * chunkSize;
        int currentChunkSize = (start + chunkSize > totalElements) ? (totalElements - start) : chunkSize;

        chunks[i].elements = malloc(currentChunkSize * elementSize);
        chunks[i].size = currentChunkSize;
        memcpy(chunks[i].elements, (char *)array + start * elementSize, currentChunkSize * elementSize);
    }

    return chunks;
}

/** Helper Function to Free the memory allocated for chunks */
void freeChunks(Chunk *chunks, int chunkCount) {
    for (int i = 0; i < chunkCount; ++i) {
        free(chunks[i].elements);
    }
    free(chunks);
}

/** Helper function to check if an element is in the unique array @private */
static bool is_in_array(void **unique_arr, size_t unique_size, void *elem, compare_func cmp) {
    for (size_t i = 0; i < unique_size; i++) {
        if (cmp(unique_arr[i], elem)) {
            return true;
        }
    }
    return false;
}

/**
    Helper function to create a duplicate-free version of an integer array
    - this works only for integer
 */
void **create_unique_array(void **arr, size_t size, size_t *new_size, compare_func cmp) {
    void **unique_arr = malloc(size * sizeof(void *));
    if (!unique_arr)
        return NULL; // Handle malloc failure

    size_t unique_index = 0;

    for (size_t i = 0; i < size; i++) {
        if (!is_in_array(unique_arr, unique_index, arr[i], cmp)) {
            unique_arr[unique_index++] = arr[i];
        }
    }

    *new_size = unique_index;
    return unique_arr;
}

/**
    Helper function to create a duplicate-free version of a generic array
    - this works for every data types
 */
napi_status remove_duplicates(napi_env env, napi_value input_array, napi_value *output_array) {
    uint32_t input_length;
    napi_get_array_length(env, input_array, &input_length);

    napi_value result_array;
    napi_create_array(env, &result_array);

    for (uint32_t i = 0; i < input_length; i++) {
        napi_value current_element;
        napi_get_element(env, input_array, i, &current_element);

        bool is_duplicate = false;
        uint32_t result_length;
        napi_get_array_length(env, result_array, &result_length);

        //? Serialize current element to JSON for comparision
        // napi_value json_string;
        napi_value global, JSON;
        napi_get_global(env, &global);
        napi_get_named_property(env, global, "JSON", &JSON);
        napi_value stringify;
        napi_get_named_property(env, JSON, "stringify", &stringify);

        napi_value current_element_json;
        napi_call_function(env, JSON, stringify, 1, &current_element, &current_element_json);

        for (uint32_t j = 0; j < result_length; j++) {
            napi_value result_element;
            napi_get_element(env, result_array, j, &result_element);

            //? Serialize result element to JSON for comparison
            napi_value result_element_json;
            napi_call_function(env, JSON, stringify, 1, &result_element, &result_element_json);

            bool is_equal;
            napi_strict_equals(env, current_element_json, result_element_json, &is_equal);
            if (is_equal) {
                is_duplicate = true;
                break;
            }
        }

        if (!is_duplicate) {
            napi_set_element(env, result_array, result_length, current_element);
        }
    }

    *output_array = result_array;
    return napi_ok;
}

/** Helper function to compare integers */
int compare_int(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

/** Helper function to compare strings */
int compare_string(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

/** Generic Helper function to count non-repeating elements in an array */
int count_non_repeating(const void *arr, int length, size_t element_size, compare_func_array cmp) {
    int count = 0;

    for (int i = 0; i < length; i++) {
        int is_repeating = 0;
        const void *current_element = (char *)arr + i * element_size;

        for (int j = 0; j < length; j++) {
            if (i != j) {
                const void *other_element = (char *)arr + j * element_size;
                if (cmp(current_element, other_element) == 0) {
                    is_repeating = 1;
                    break;
                }
            }
        }

        if (!is_repeating) {
            count++;
        }
    }

    return count;
}