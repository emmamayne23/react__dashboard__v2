/* eslint-disable react/no-unknown-property */
const MyMap = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.51715358093!2d-0.1797294500000017!3d5.591208700000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1734800861806!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          className="mx-auto w-11/12"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MyMap;
