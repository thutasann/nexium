#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/** Helper function to chunk array */
int **chunk_helper(const int *array, size_t array_length, size_t chunk_length, size_t *num_chunks) {
    if (chunk_length == 0 || array_length == 0) {
        *num_chunks = 0;
        return NULL; // Return NULL if no chunks can be created
    }

    // Calculate the number of chunks required
    *num_chunks = (array_length + chunk_length - 1) / chunk_length;

    // Allocate memory for the array of chunk pointers
    int **chunks = (int **)malloc(*num_chunks * sizeof(int *));

    // Populate each chunk with elements
    for (size_t i = 0; i < *num_chunks; i++) {
        // Determine the number of elements in the current chunk
        size_t current_chunk_length = ((i + 1) * chunk_length <= array_length) ? chunk_length : (array_length - i * chunk_length);

        // Allocate memory for the current chunk
        chunks[i] = (int *)malloc(current_chunk_length * sizeof(int));

        // Copy elements into the current chunk
        for (size_t j = 0; j < current_chunk_length; j++) {
            chunks[i][j] = array[i * chunk_length + j];
        }
    }
    return chunks;
}

// Helper function to Free memory allocated by chunks
void free_chunks(int **chunks, size_t num_chunks) {
    for (size_t i = 0; i < num_chunks; i++) {
        free(chunks[i]);
    }
    free(chunks);
}