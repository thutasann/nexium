#include "../include/array_helpers.h"
#include <stdbool.h>
#include <stdlib.h>

#define INSERTION_SORT_THRESHOLD 10

/** helper function for bubble_sort */
void bubble_sort(int *arr, size_t length) {
    if (length <= 1)
        return;

    size_t lastSwap;
    for (size_t end = length - 1; end > 0; end = lastSwap) {
        lastSwap = 0;
        for (size_t j = 0; j < end; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                lastSwap = j;
            }
        }
        if (lastSwap == 0)
            break;
    }
}

// Helper function for insertion sort
void insertion_sort(int arr[], int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Helper function for the median-of-three pivot
int median_of_three(int arr[], int left, int right) {
    int mid = left + (right - left) / 2;
    if (arr[left] > arr[mid]) {
        int temp = arr[left];
        arr[left] = arr[mid];
        arr[mid] = temp;
    }
    if (arr[left] > arr[right]) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    if (arr[mid] > arr[right]) {
        int temp = arr[mid];
        arr[mid] = arr[right];
        arr[right] = temp;
    }
    return arr[mid];
}

// Partition function using median-of-three pivot
int partition(int arr[], int left, int right) {
    int pivot = median_of_three(arr, left, right);
    int i = left - 1;
    int j = right + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i >= j)
            return j;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// Main quick sort function
void quick_sort(int arr[], int left, int right) {
    if (left < right) {
        if (right - left + 1 <= INSERTION_SORT_THRESHOLD) {
            insertion_sort(arr, left, right);
        } else {
            int pivot_index = partition(arr, left, right);
            quick_sort(arr, left, pivot_index);
            quick_sort(arr, pivot_index + 1, right);
        }
    }
}