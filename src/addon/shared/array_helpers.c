#include "../include/array_helpers.h"
#include <stdlib.h>
#include <string.h>

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

/** Helper function to check if an element is in the unique array */
static bool is_in_array(void **unique_arr, size_t unique_size, void *elem, compare_func cmp) {
    for (size_t i = 0; i < unique_size; i++) {
        if (cmp(unique_arr[i], elem)) {
            return true;
        }
    }
    return false;
}

/** Helper function to create a duplicate-free version of a generic array */
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