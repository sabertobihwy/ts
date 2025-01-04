export interface CollectionIterator<T> {
    createIterator: () => Iterator<T>
}

export interface Iterator<T> {
    next: () => T | undefined
    hasNext: () => boolean
}