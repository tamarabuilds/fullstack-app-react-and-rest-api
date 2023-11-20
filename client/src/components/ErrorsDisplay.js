/**
 * Displays validation errors for the 'Sign Up', 'Create Course', and 
 * 'Update Course' screens. Errors are provided by the REST API
 * 
 * @param {object} errors 
 * @returns List of errors component
 */

const ErrorsDisplay = ({ errors }) => {
    let errorsDisplay = null;

    if (errors.length) {
        errorsDisplay = (
            <div className="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                    {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ul>
            </div>
        )
    }
    return errorsDisplay;
}

export default ErrorsDisplay;