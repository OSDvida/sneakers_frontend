import CentralContentWrapper from '../../hoc/CentralContentWrapper/CentralContentWrapper'
import styles from './SneakerForm.module.scss'
import { InputText } from "primereact/inputtext";
import Title from '../../components/Title/Title';
import React, { useState } from 'react';
import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL
const initialStateForm = {
  name: "",
  color: "",
  size: "",
  price: "",
  unityMeasure: "",
  brandId: "",
  categoryId: "",
}

function SneakerForm() {
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [imageFile, setImageFile] = useState(null);
  const [sneakerForm, setSneakerForm] = useState(initialStateForm);


  function saveSneaker(values) {
    axios.post(`${apiUrl}sneakers`, values).
      then(res => {
        if (imageFile) {
          saveImageToSneaker(res.data).then(() => resetForm())
        } else {
          resetForm()
        }
      })
  }

  function saveImageToSneaker(sneakerId) {
    const formData = new FormData();
    formData.append("file", imageFile);

    return axios.post(`${apiUrl}sneakers/${sneakerId}/upload-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  function handleChange(e) {
    const {
      name,
      value
    } = e.target;

    setSneakerForm({
      ...sneakerForm,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const bodyToSend = {
      name: sneakerForm.name,
      color: sneakerForm.color,
      size: sneakerForm.size,
      price: sneakerForm.price,
      unityMeasure: sneakerForm.unityMeasure,
      brand: { id: sneakerForm.brandId },
      category: { id: sneakerForm.categoryId }
    }

    saveSneaker(bodyToSend);
  };

  function handleFileChange(event) {
    setImageFile(event.target.files[0]);
  };

  function getBrands() {
    if (brands.length > 0) return;

    axios.get(`${apiUrl}brands`)
      .then(({ data }) => setBrands(data))
  }

  function getCategories() {
    if (categories.length > 0) return;

    axios.get(`${apiUrl}categories`)
      .then(({ data }) => { setCategories(data) })
  }

  function resetForm() {
    setSneakerForm(initialStateForm)
    setImageFile(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['sneaker-form-container']}>
        <Title title="Novo Sneaker" />
        <InputText
          name='name'
          className={styles['input-text']}
          variant="filled"
          placeholder='Nome do Sneaker'
          value={sneakerForm.name}
          onChange={handleChange}
        />

        <InputText
          name='color'
          className={styles['input-text']}
          variant="filled"
          placeholder='Cor. Ex: Preto/Azul'
          value={sneakerForm.color}
          onChange={handleChange}
        />

        <input
          name='size'
          variant="filled"
          placeholder='Tamanho'
          value={sneakerForm.size}
          onChange={handleChange}
        />

        <input
          name='price'
          variant="filled"
          placeholder='Preço'
          mode="currency" currency="BRL" locale="pt-BR"
          value={sneakerForm.price}
          onChange={handleChange}
        />

        <InputText
          name='unityMeasure'
          className={styles['input-text']}
          style={{ width: 80 }} variant="filled"
          placeholder='U.M'
          value={sneakerForm.unityMeasure}
          onChange={handleChange}
        />

        <select
          name="brandId"
          id="brand"
          value={sneakerForm.brandId}
          onClick={() => getBrands()}
          onChange={handleChange}
        >
          <option value="" disabled>Selecione uma marca</option>

          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
        <br />
        <select
          name="categoryId"
          id="category"
          value={sneakerForm.categoryId}
          onClick={() => getCategories()}
          onChange={handleChange}
        >
          <option value="" disabled>Selecione uma categoria</option>

          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <br />
        <input type="file" onChange={handleFileChange} />

        <input type="submit" value="Cadastar" />

      </div>
    </form>

  )
}

export default CentralContentWrapper(SneakerForm)