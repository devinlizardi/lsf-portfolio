/* eslint-disable react/prop-types */

const InputField = ({ labelText, defaultValue }) => {
  return <label className="w-full">
    <h1>{labelText}</h1>
    <input type="text" defaultValue={defaultValue} className="bg-[#ccc] flex-1 w-full" />
  </label>
}

export const AdminWork = ({ work, id }) => {
  return <div className="outline rounded-lg p-2 overflow-hidden flex flex-col">
    <h1 className="text-right">{id}</h1>
    <form className="flex flex-col gap-2 justify-center" name={`form-${work.url}`}>
      <InputField labelText="title" defaultValue={work.title} />
      <InputField labelText="type" defaultValue={work.type} />
      <InputField labelText="date" defaultValue={work.date} />
      <InputField labelText="filter" defaultValue={work.filter} />
      <InputField labelText="url" defaultValue={work.url} />
      <label>
        disable &nbsp;<input type="checkbox" defaultChecked={work.disabled} />
      </label>
    </form>
  </div>
}