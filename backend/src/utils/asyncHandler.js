const asyncHandler = (requestHandler) => {
  async (req, res, next) => {
    await new Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}
export { asyncHandler }


// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//       await func(req, res, next)
//      } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })
//   }
// }
/********************************************************************** 
// const asyncHandler = (fasync (...args)unc) => {
//   return  => {
//     try {
//       await func(...args);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
// };
/********************************************************************** 
const someAsyncFunction = async () => {
          console.log('Operation started');
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log('Operation completed');
};
const wrappedFunction = asyncHandler(someAsyncFunction);
// Calling the wrapped function
wrappedFunction();

*/
