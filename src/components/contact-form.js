"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const labels = {
  firstname: {
    label: "First Name",
    placeholder: "John",
  },
  lastname: {
    label: "Last Name",
    placeholder: "Doe",
  },
  email: {
    label: "Email",
    placeholder: "john@example.com",
  },
  phone: {
    label: "Phone",
    placeholder: "(760) 844-5270",
  },
  message: {
    label: "Message",
    placeholder: "How can we help you today?",
  },
  button: {
    label: "Request a free consultation",
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <Card className='bg-card mx-auto max-w-md pt-4'>
      <CardContent>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstname'>
                {labels.firstname.label}
              </Label>
              <Input
                id='firstname'
                placeholder={labels.firstname.placeholder}
                required
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastname'>
                {labels.lastname.label}
              </Label>
              <Input
                id='lastname'
                placeholder={labels.lastname.placeholder}
                required
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>{labels.email.label}</Label>
            <Input
              id='email'
              type='email'
              placeholder={labels.email.placeholder}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='website'>{labels.phone.label}</Label>
            <Input
              id='phone'
              type='phone'
              placeholder={labels.phone.placeholder}
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>{labels.message.label}</Label>
            <Textarea
              id='message'
              placeholder={labels.message.placeholder}
              className='min-h-[100px]'
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type='submit' className='w-full'>
            {labels.button.label}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
