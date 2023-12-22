interface IGetPercent {
  number: number;
  maxNumber: number;
  dividerNumber: number;
}
export const getPercent = ({
  number,
  maxNumber,
  dividerNumber,
}: IGetPercent) => {
  const firstHalf = number <= dividerNumber;
  return firstHalf
    ? (number * 100) / dividerNumber
    : 100 - ((number - dividerNumber) * 100) / (maxNumber - dividerNumber);
};
