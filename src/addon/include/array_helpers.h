#ifndef ARRAY_HELPERS_H
#define ARRAY_HELPERS_H

#include <node_api.h>
#include <stdbool.h>
#include <stdlib.h>

// Chunk Structure
typedef struct {
    void *elements; // A pointer to store any type of data
    int size;       // Number of elements in the chunk
} Chunk;

Chunk *chunkArray(void *array, int elementSize, int totalElements, int chunkSize, int *chunkCount);
void freeChunks(Chunk *chunks, int chunkCount);

/**
    ### creates a new type called `compare_func` that returns bool value
    - define a pointer to a function named `compare_func`
    - The function takes two parameters, both are void pointers
 */
typedef bool (*compare_func)(const void *, const void *);
void **create_unique_array(void **arr, size_t size, size_t *new_size, compare_func cmp);
napi_status remove_duplicates(napi_env env, napi_value input_array, napi_value *output_array);

#endif
