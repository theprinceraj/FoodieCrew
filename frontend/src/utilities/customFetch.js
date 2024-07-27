/**
 * Sends a fetch request to the specified URL with optional request options.
 *
 * @param {string} url - The URL to send the request to. This should be a relative URL, as the function will append the base URL based on the environment.
 * @param {object} [options={}] - Optional request options to be passed to the `fetch` function. This can include headers, method, body, etc.
 * @return {Promise<Response>} A Promise that resolves to the response from the server. The response object will have the same properties as the one returned by the built-in `fetch` function.
 *
 * @example
 * // Get a user by ID
 * const userId = '123';
 * const user = await customFetch(`/users/${userId}`);
 * console.log(user.json());
 *
 * @example
 * // Create a new user
 * const newUser = {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com'
 * };
 * const response = await customFetch('/users', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   },
 *   body: JSON.stringify(newUser)
 * });
 * console.log(response.status);
 */
export const customFetch = async (url, options = {}) => {
    const baseURL = import.meta.env.PROD ? window.location.origin : import.meta.env.VITE_DEV_BACKEND_BASE_URL;
    const response = await fetch(`${baseURL}${url}`, {
        ...options,
    });
    return response;
};
