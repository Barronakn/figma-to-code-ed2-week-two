export const detailsProductData = (product, selectedVariant) => {
    return {
      id: product.node.id,
      title: product.node.title,
      description: product.node.description,
      price: selectedVariant.price.amount,
      currency: selectedVariant.price.currencyCode,
      image: selectedVariant.image?.url || product.node.featuredImage?.url,
      variant: {
        id: selectedVariant.id,
        title: selectedVariant.title,
        image: selectedVariant.image?.url,
        selectedOptions: selectedVariant.selectedOptions,
      },
    };
  };
  