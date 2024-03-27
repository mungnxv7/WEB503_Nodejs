import Joi from "joi";

export const porductValidate = Joi.object({
  title: Joi.string().required().min(3).max(255).messages({
    "string.empty": "Tên sản phẩm không dược bỏ trống !",
    "string.min": "Tên sản phẩm phải có ít nhất 3 kí tự",
    "string.max": "Tên sản phẩm không quá 255 ký tự",
  }),
  price: Joi.number().required().min(1).messages({
    "number.empty": "Giá tiền không dược bỏ trống !",
    "number.min": "Giá tiền phải lớn hơn 0",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Danh mục không dược bỏ trống !",
  }),
  thumbnail: Joi.string().required().messages({
    "string.empty": "Vui lòng cung cấp ảnh sản phẩm.",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Danh mục không dược bỏ trống !",
  }),
  rating: Joi.number(),
  images: Joi.array(),
}).options({ abortEarly: false });
