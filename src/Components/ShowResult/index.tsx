
const ShowRes = ({ value = 0 }: { value: number }) => {
    return (
        <>
            <div>
                <label>
                    Equation: serie(n) = 2 fibonacci(n - 2) + 3 triangular(n -
                    2) - 7 primo(n - 1)
                </label>
            </div>
            <div>
                <label>
                    Result: <b>{value}</b>
                </label>
            </div>
        </>
    );
};

export default ShowRes;
