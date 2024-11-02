#include "../include/array_helpers.h"
#include <stdlib.h>
#include <string.h>

// Helper Function to chunk an array into smaller arrays (chunks) of specified size
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

// Helper Function to Free the memory allocated for chunks
void freeChunks(Chunk *chunks, int chunkCount) {
    for (int i = 0; i < chunkCount; ++i) {
        free(chunks[i].elements);
    }
    free(chunks);
}
