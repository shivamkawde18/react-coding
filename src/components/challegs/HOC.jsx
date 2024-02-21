const upperCase = (TargetComponent) => {
  return (props) => {
    const newProps = {
      ...props,
      text: props.text.toUpperCase(),
    };

    return <TargetComponent {...newProps} />;
  };
};

export const MyComponent = upperCase((props) => {
  return <div>{props.text}</div>;
});

