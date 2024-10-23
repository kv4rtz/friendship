export const formatPrice = (price: number | bigint) => {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  })
    .format(Number(price))
    .replace("₽", "руб")
}
