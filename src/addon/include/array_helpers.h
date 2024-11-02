#ifndef ARRAY_HELPERS_H
#define ARRAY_HELPERS_H

#include <node_api.h>

typedef struct {
    void *elements; // A pointer to store any type of data
    int size;       // Number of elements in the chunk
} Chunk;

// Function prototypes
Chunk *chunkArray(void *array, int elementSize, int totalElements, int chunkSize, int *chunkCount);
void freeChunks(Chunk *chunks, int chunkCount);

#endif // ARRAY_HELPERS_H
