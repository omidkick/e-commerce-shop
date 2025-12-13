import { OrderDetailsType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Order Store - Manages all order/payment details
 * - Saves orders in localStorage
 * - Allows viewing order history
 * - Stores payment information securely (no card numbers)
 */

export type OrderStoreStateType = {
  orders: OrderDetailsType[];
  currentOrder: OrderDetailsType | null;
  hasHydrated: boolean;
};

export type OrderStoreActionsType = {
  // Add new order
  addOrder: (order: OrderDetailsType) => void;

  // Get all orders
  getOrders: () => OrderDetailsType[];

  // Get single order by ID
  getOrderById: (orderId: string) => OrderDetailsType | undefined;

  // Set current order (for viewing details)
  setCurrentOrder: (order: OrderDetailsType | null) => void;

  // Get current order
  getCurrentOrder: () => OrderDetailsType | null;

  // Clear all orders
  clearOrders: () => void;

  // Delete single order
  deleteOrder: (orderId: string) => void;
};

const useOrderStore = create<
  OrderStoreStateType & OrderStoreActionsType
>()(
  persist(
    (set, get) => ({
      orders: [],
      currentOrder: null,
      hasHydrated: false,

      addOrder: (order: OrderDetailsType) => {
        set((state) => ({
          orders: [order, ...state.orders], // Add new order at the beginning
          currentOrder: order,
        }));
      },

      getOrders: () => get().orders,

      getOrderById: (orderId: string) => {
        return get().orders.find((order) => order.orderId === orderId);
      },

      setCurrentOrder: (order: OrderDetailsType | null) => {
        set({ currentOrder: order });
      },

      getCurrentOrder: () => get().currentOrder,

      clearOrders: () => {
        set({ orders: [], currentOrder: null });
      },

      deleteOrder: (orderId: string) => {
        set((state) => ({
          orders: state.orders.filter((order) => order.orderId !== orderId),
          currentOrder:
            state.currentOrder?.orderId === orderId ? null : state.currentOrder,
        }));
      },
    }),
    {
      name: "orders", // localStorage key
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useOrderStore;