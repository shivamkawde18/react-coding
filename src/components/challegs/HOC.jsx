const upperCase = (WrapperComponent) => {
  return (props) => {
    const newProps = {
      ...props,
      text: props.text.toUpperCase(),
    };

    return <WrapperComponent {...newProps} />;
  };
};

export const MyComponent = upperCase((props) => {
  return <div>{props.text}</div>;
});
