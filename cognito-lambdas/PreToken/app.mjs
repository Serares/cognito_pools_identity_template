const lambdaHandler = (event, context, callback) => {
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        department: "Engineering",
      },
    },
  };

  callback(null, event);
};

export { lambdaHandler };
