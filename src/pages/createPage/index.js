import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import getCookie from '../../utils/cookie';
import request from 'superagent';

import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submitButton';
import Alert from '../../components/alert';
import Label from '../../components/label';

const CLOUDINARY_UPLOAD_PRESET = 'home-designs';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lilipavlova/image/upload';

const CreatePage = () => {
	const [ , setUploadedFile ] = useState('');
	const [ uploadedFileCloudinaryUrl, setUploadedFileCloudinaryUrl ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ alert, setAlert ] = useState(false);
	const history = useHistory();

	const onImageUpload = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		setUploadedFile(file);
		let upload = request
			.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				setUploadedFileCloudinaryUrl(response.body.secure_url);
			}
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!category || !uploadedFileCloudinaryUrl) {
			setAlert(true);
			return;
		}

		await fetch('http://localhost:9999/api/designs', {
			method: 'POST',
			body: JSON.stringify({
				image: uploadedFileCloudinaryUrl,
				category
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: getCookie('x-auth-token')
			}
		});
		history.push('/');
	};

	return (
		<PageLayout>
			<form className={styles.container}>
				<Title title="Create your own design" />
				{alert ? <Alert message="All fields are required!" /> : null}
				<Label htmlFor="image" title="Select image:" />
				<div className={styles.wrapper}>
					<input type="file" id="image" name="image" accept="image/*" onChange={onImageUpload} className={styles.inputBox} />
				</div>
				<div>
					{uploadedFileCloudinaryUrl ? (
						<img id="new" src={uploadedFileCloudinaryUrl} alt="" className={styles.image} />
					) : null}
				</div>
				<Label htmlFor="category" title="Choose a category:" />
				<div className={styles.wrapper}>
					<select
						name="category"
						value={category}
						id="category"
                        onChange={(e) => setCategory(e.target.value)}
                        className={styles.inputBox}
					>
						<option>...</option>
						<option value="livingRoom">Living Room</option>
						<option value="bedroom">Bedroom</option>
						<option value="kitchen">Kitchen</option>
						<option value="bathroom">Bathroom</option>
						<option value="garden">Garden</option>
					</select>
				</div>
				<SubmitButton title="Submit" onClick={handleSubmit} />
			</form>
		</PageLayout>
	);
};

export default CreatePage;
