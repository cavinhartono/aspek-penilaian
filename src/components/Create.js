import { useState } from "react";

export default function Create() {
  const [inputField, setInputField] = useState([
    {
      aspek_penilaian_1: {
        students: [
          {
            name: ""
            grade: ""
          },
        ],
      },
      aspek_penilaian_2: {
        students: [
          {
            name: "",
            grade: "",
          }
        ],
      },
      aspek_penilaian_3: {
        students: [
          {
            name: "",
            grade: "",
          }
        ],
      },
      aspek_penilaian_4: {
        students: [
          {
            name: "",
            grade: "",
          }
        ],
      },
    },
  ]);

  const addInputField = () => {
    setInputField([
      ...inputField,
      {
        aspek_penilaian_1: {},
        aspek_penilaian_2: {},
        aspek_penilaian_3: {},
        aspek_penilaian_4: {},
      },
    ]);
  };

  const deleteInputField = (i) => {
    const rows = [...inputField];
    rows.splice(i, 1);
    setInputField(rows);
  };

  const handleChange = (i, e) => {
    const { name, value } = e.target;
    const list = [...inputField];
    
    setInputField(list);
  };

  return (
    <div className="create">
      <table>
        <thead>
          <th>
            <label htmlFor="name">Nama Lengkap</label>
          </th>
          <th>
            <label htmlFor="grade_1">Aspek Penilaian 1</label>
          </th>
          <th>
            <label htmlFor="grade_1">Aspek Penilaian 2</label>
          </th>
          <th>
            <label htmlFor="grade_1">Aspek Penilaian 3</label>
          </th>
          <th>
            <label htmlFor="grade_1">Aspek Penilaian 4</label>
          </th>
        </thead>
        <tbody>
          {inputField.map((data, i) => {
            const {
              aspek_penilaian_1,
              aspek_penilaian_2,
              aspek_penilaian_3,
              aspek_penilaian_4,
            } = data;
            return (
              <tr key={i}>
                <td>
                  <input type="text" value={name} />
                </td>
                <td>
                  <input type="num" value={aspek_penilaian_1} />
                </td>
                <td>
                  <input type="num" value={aspek_penilaian_2} />
                </td>
                <td>
                  <input type="num" value={aspek_penilaian_3} />
                </td>
                <td>
                  <input type="num" value={aspek_penilaian_4} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <button onClick={addInputField}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
