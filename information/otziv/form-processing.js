document.addEventListener('itc.successSendForm', (e) => {
    const el = e.target.closest('.form-container').querySelector('.form-success');
    el.classList.remove('form-success_hide');
  });
  // при клике на .form-success__btn
  document.querySelector('.form-success__btn').addEventListener('click', (e) => {
    const el = e.target.closest('.form-container').querySelector('form');
    const form = ItcSubmitForm.getOrCreateInstance(el);
    form.reset();
    e.target.closest('.form-container').querySelector('.form-success').classList.add('form-success_hide');
  });
  // 'form' - селектор для выбора <form>
ItcSubmitForm.getOrCreateInstance('form');
ItcSubmitForm.getOrCreateInstance('form', {
    isCheckValidationOnClient: true, // проверять форму перед отправкой на сервер
    attachMaxItems: 5, // максимальное количество файлов, которые можно добавить к форме
    attachMaxFileSize: 512, // 512 Кбайт - максимальный размер файла
    attachExt: ['jpg', 'jpeg', 'bmp', 'gif', 'png'] // допустимые расширения файлов
  });
  define('HAS_CHECK_CAPTCHA', true);
  // не пропускать форму, если к ней не прикреплён хотя бы один файл
const HAS_ATTACH_REQUIRED = false;
// разрешённые mime типы файлов
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/gif', 'image/png'];
// максимальный размер файла
const MAX_FILE_SIZE = 512 * 1024;
// отправлять письмо на указанный адрес email
const HAS_SEND_EMAIL = true;
// добавить файлы в тело письма в виде ссылок (В противном случае прикрепить)
const HAS_ATTACH_IN_BODY = true;
// базовый URL-адрес (используется, если составления полного URL для ссылок, добавляемых в тело письма)
const BASE_URL = 'https://domain.com';
// настройка почты (отправка осуществляется через SMTP)
const EMAIL_SETTINGS = [
  'addresses' => ['shkodabogdan39@gmail.com'], // кому необходимо отправить письмо
  'from' => ['no-reply@domain.com', 'Имя сайта'], // от какого email и имени необходимо отправить письмо
  'subject' => 'Сообщение с формы обратной связи', // тема письма
  'host' => 'ssl://smtp.yandex.ru', // SMTP-хост
  'username' => 'name@yandex.ru', // // SMTP-пользователь
  'password' => '*********', // SMTP-пароль
  'port' => '465' // SMTP-порт
];
// необходимо ли отправлять уведомление пользователю на почту
const HAS_SEND_NOTIFICATION = false;
// тема письма
const SUBJECT_FOR_CLIENT = 'Ваше сообщение доставлено';
// писать предупреждения и ошибки в лог
define('HAS_WRITE_LOG', true);
// записывать успешные формы в файл forms.log
const HAS_WRITE_LOG = true;