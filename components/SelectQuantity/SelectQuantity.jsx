import { SelectInput, InputOption } from './SelectQuantity.style'
const SelectQuantity = ({ current, max, callback }) => {
  let ar = []
  for (let i = 1; i < max + 1; i++) {
    ar = [...ar, i]
  }

  return (
    <SelectInput
      onChange={(e) => {
        callback(e)
      }}
    >
      {ar.map((qty) =>
        qty == current ? (
          <InputOption selected="selected" key={qty}>
            {qty}
          </InputOption>
        ) : (
          <InputOption value={qty} key={qty}>
            {qty}
          </InputOption>
        )
      )}
    </SelectInput>
  )
}
export default SelectQuantity
