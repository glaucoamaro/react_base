import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { StudentContainer, StudentProfile } from './styled';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('/students');
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Students</h1>
      <StudentContainer>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <StudentProfile>
                {get(student, 'Images[0].url', false) ? (
                  <img src={student.Images[0].url} alt="" width="100%" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </StudentProfile>
              <span>{student.name}</span>
              <span>{student.email}</span>

              <Link to={`/student/${student.id}/edit/`}>
                <FaEdit size={20} />
              </Link>
              <Link to={`/student/${student.id}/delete/`}>
                <FaWindowClose size={20} />
              </Link>
            </div>
          );
        })}
      </StudentContainer>
    </Container>
  );
}
