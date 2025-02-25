// 도서 목록 더미 데이터
export interface Book {
  bookId: number;
  product_id: number;
  search_keyword: string;
  total_click_count: number;
  total_order_count: number;
  total_order_amount: number;
  contents: string;
  product_name: string;
  sale_price: number;
  category_name: string;
  total_purchase_count: number;
  keywords: string[];
}
export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export const pageInfoData: PageInfo = {
  page: 1,
  size: 4,
  totalElements: 100,
  totalPages: 10,
};

export const bookListData: Book[] = [
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 117721411,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 118468152,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 119562091,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
  {
    bookId: 1,
    product_id: 122428190,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"],
  },
];
