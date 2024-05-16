import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import TableRow from "./tableRow";
export default function DataTable() {
  const [endDate, setEndDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState("");
  const [priority, setPriority] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dateNow = new Date();
  const [tugas, setTugas] = useState("");
  const [done, setDone] = useState(true);
  const [check, setCheck] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const formattedDate = format(endDate, "dd/MM/yyyy", {
    timeZone: "Asia/Jakarta",
  });
  // console.log(formattedDate);
  const [data, setData] = useState([]);
  // };

  const handleDone = () => {
    setDone(!done);
  };

  const handlePriority = (priority) => {
    setPriority(priority);
  };
  const clearForm = () => {
    setPriority("");
    setTugas("");
    // setEndDate("");
  };
  const handleTugas = (val) => {
    setTugas(val);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = () => {
    setDeleteList(true);
    setData([]);
  };

  const handleSubmitForm = (event) => {
    const newDateNow = `${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()}`;
    const formattedDate = format(endDate, "dd/MM/yyyy", {
      timeZone: "Asia/Jakarta",
    });

    // const newEndDate = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`;
    // setData([...])
    setData([
      ...data,
      {
        id: data.length,
        priority,
        tugas,
        newDateNow,
        newEndDate: formattedDate,
        check,
      },
    ]);
    clearForm();
    event.preventDefault();
  };
  return (
    <div className="">
      <div>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-6 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={() => handleShowForm()}
        >
          <span
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            onClick={handleDone}
          >
            Tambah Tugas
          </span>
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleDelete}
        >
          Hapus List
        </button>
      </div>
      <div className="overflow-x-auto">
        <TableRow data={data} setData={setData} deleteList={deleteList} />
      </div>
      {showForm && (
        <section
          className="bg-white dark:bg-gray-900 w-full "
          style={{ marginTop: 20 }}
        >
          <div className="py-8 my-9 px-4 max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add To Do List
            </h2>
            <form action="#" onSubmit={handleSubmitForm}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2 w-1/2 sm:w-auto">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Priority
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option>Select category</option>
                    <option onChange={() => handlePriority("High")}>
                      High
                    </option>
                    <option onChange={() => handlePriority("Medium")}>
                      Medium
                    </option>
                    <option onChange={() => handlePriority("Easy")}>
                      Easy
                    </option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    End Date
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
                <div className="sm:col-span-2 w-1/2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tugas
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e) => handleTugas(e.target.value)}
                    value={tugas}
                    placeholder="Tugas yang harus dilakukan"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Tambah Tugas
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
