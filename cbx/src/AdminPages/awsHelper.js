import AWS from "aws-sdk";

 // Function to upload file to s3
 export const uploadFile = async (file) => {

    const S3_BUCKET = "cbximages"; // S3 Bucket Name
    const REGION = "ap-southeast-2"; // S3 Region

    // Initialize S3 instance
  const s3 = new AWS.S3({
    accessKeyId: "AKIA6GBMB2DVTWONKLE7",
    secretAccessKey: "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",
    region: REGION,
  });
  console.log("FILE:", file)
  // Files Parameters
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };

  try {
    // Uploading file to S3
    const data = await s3.upload(params).promise();
    console.log("File uploaded successfully:", data.Location);
    alert("File uploaded successfully.");
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    alert("Error uploading file. Please try again.");
  }
};


export const deleteFile = async (fileName) => {
    const S3_BUCKET = 'cbximages'; // S3 Bucket Name
    const REGION = 'ap-southeast-2'; // S3 Region

    // Initialize S3 instance
    const s3 = new AWS.S3({
      accessKeyId: 'AKIA6GBMB2DVTWONKLE7',
      secretAccessKey: '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',
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: fileName.split('/').pop(), // removes everything up to last /
    };

    try {
      await s3.deleteObject(params).promise();
    } catch (error) {
      console.error('Error deleting file from S3:', error);
      alert('Error deleting file. Please try again.');
    }
  };