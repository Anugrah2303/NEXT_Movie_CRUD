const OptionsList = ({id, data, Tag}: {id: string, data: string[], Tag: "datalist"| "select"}) => {
  return (
    <>
      <Tag id={id}>
        {
          data.map((elem, index) => (
            <option value={elem} key={index} />
          ))
        }
      </Tag>
    </>
  )
}

export default OptionsList