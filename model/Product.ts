export interface ProductResult {
    id:         number;
    code:       string;
    created_by: string;
    updated_by: string;
    created_at: null;
    updated_at: null;
    product:    Product;
}

export interface Product {
    id:          number;
    created_by:  string;
    updated_by:  string;
    created_at:  null;
    updated_at:  null;
    name:        string;
    description: string;
    price:       number;
    quantity:    number;
    image:       string;
    category:    string;
    status:      string;
    image_url:   string;
    product_sku: string;
    is_deleted:  boolean;
    shop:        Shop;
}

export interface Shop {
    id:              number;
    created_by:      string;
    updated_by:      string;
    created_at:      null;
    updated_at:      null;
    name:            string;
    description:     string;
    status:          string;
    image_url:       string;
    shop_url:        string;
    shop_technology: string;
    is_deleted:      boolean;
}
