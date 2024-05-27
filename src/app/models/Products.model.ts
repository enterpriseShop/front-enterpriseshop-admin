export interface ProductResponse {
    id: number,
    name: string,
    price: number,
    status: true,
    rating: number,
    cover: string,
    description: string
}

export interface ProductRequest {
    name: string,
    price: number,
    status: true,
    rating: number,
    cover: string,
    description: string
}