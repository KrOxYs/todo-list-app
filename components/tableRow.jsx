import { Checkbox, Table, TableHead } from "flowbite-react";
import { useEffect, useState } from "react";
export default function TableRow({ data, setData, deleteList }) {
  const [decoration, setDecoration] = useState("none");
  const [complete, setComplete] = useState([]);
  const [check, setCheck] = useState(false);
  const handleCheck = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.check = true;
          setCheck(item.check);
          setComplete([
            ...complete,
            {
              id: item.id,
              priority: item.priority,
              tugas: item.tugas,
              newDateNow: item.newDateNow,
              newEndDate: item.newEndDate,
              check: item.check,
            },
          ]);

          return { ...item, coret: !item.coret };
          // Mengubah status coret menjadi sebaliknya
        }
        return item;
      })
    );
  };
  useEffect(() => {
    if (deleteList === true) {
      setComplete([]);
    }
  }, [deleteList]);

  // console.log(data);
  // console.log(deleteList);
  return (
    <div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4 ">
            {/* <hr class="my-8 w-full h-1 bg-blue-700 border-0 dark:bg-blue-700" /> */}
            {/* <Checkbox disabled /> */}
            Check
          </Table.HeadCell>
          {/* <Table.HeadCell>No</Table.HeadCell> */}
          <Table.HeadCell>Prioritas</Table.HeadCell>
          <Table.HeadCell>Tugas</Table.HeadCell>
          <Table.HeadCell>Start Time</Table.HeadCell>
          <Table.HeadCell>End Time</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item, key) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={key}
            >
              <Table.Cell className="p-4">
                <Checkbox
                  onClick={() => handleCheck(item.id)}
                  disabled={item.check}
                />
              </Table.Cell>
              <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                style={item.coret ? { textDecoration: "line-through" } : {}}
              >
                {/* <span className="underline">High</span> */}
                {item.priority}
              </Table.Cell>
              <Table.Cell>
                <span
                  style={item.coret ? { textDecoration: "line-through" } : {}}
                >
                  {item.tugas}
                </span>
              </Table.Cell>
              <Table.Cell
                style={item.coret ? { textDecoration: "line-through" } : {}}
              >
                {item.newDateNow}
              </Table.Cell>
              <Table.Cell
                style={item.coret ? { textDecoration: "line-through" } : {}}
              >
                {item.newEndDate}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div style={{ marginTop: 40 }}>
        <h1 className=" text-green-700 text-xl">Sudah Selesai</h1>
        <Table hoverable className="">
          <Table.Head>
            {/* <Table.HeadCell className="p-4 mb-11 ">
              Check
            </Table.HeadCell> */}
            {/* <Table.HeadCell>No</Table.HeadCell> */}
            <Table.HeadCell>Prioritas</Table.HeadCell>
            <Table.HeadCell>Tugas</Table.HeadCell>
            <Table.HeadCell>Start Time</Table.HeadCell>
            <Table.HeadCell>End Time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {complete.map((item, key) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={key}
              >
                {/* <Table.Cell className="p-4">
                  <Checkbox
                    onClick={() => handleCheck(item.id)}
                    checked
                    disabled
                  />
                </Table.Cell> */}
                <Table.Cell
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  style={item.coret ? { textDecoration: "line-through" } : {}}
                >
                  {/* <span className="underline">High</span> */}
                  {item.priority}
                </Table.Cell>
                <Table.Cell>
                  <span
                    style={item.coret ? { textDecoration: "line-through" } : {}}
                  >
                    {item.tugas}
                  </span>
                </Table.Cell>
                <Table.Cell
                  style={item.coret ? { textDecoration: "line-through" } : {}}
                >
                  {item.newDateNow}
                </Table.Cell>
                <Table.Cell
                  style={item.coret ? { textDecoration: "line-through" } : {}}
                >
                  {item.newEndDate}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
