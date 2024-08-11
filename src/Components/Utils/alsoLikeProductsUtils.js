export const productData = (product) => {
    return {
      id: product.node.id,
      title: product.node.title,
      description: product.node.description,
      price: product.node.variants.edges[0]?.node.price.amount,
      currency: product.node.variants.edges[0]?.node.price.currencyCode,
      image: product.node.featuredImage.url,
      variant: {
        id: product.node.variants.edges[0]?.node.id,
        title: product.node.variants.edges[0]?.node.title,
        image: product.node.variants.edges[0]?.node.image?.url,
        selectedOptions: product.node.variants.edges[0]?.node.selectedOptions?.map((option) => ({
          name: option.name,
          value: option.value,
        })),
      },
    };
  };
  