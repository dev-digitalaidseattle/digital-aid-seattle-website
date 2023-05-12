import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Container from '../components/Container'
import SelectInputGroup from '../components/form/SelectInputGroup'
import TextAreaFormGroup from '../components/form/TextAreaFormGroup'
import TextFormGroup from '../components/form/TextFormGroup'
import TextFormGroupWithAddon from '../components/form/TextFormGroupWithAddon'
import Layout from '../components/Layout'
import CardOne from '../components/cards/CardOne'
import Stack from '@mui/material/Stack'

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function PartnerForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data) {
    try {
      const endpoint = 'api/partner'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      const response = await fetch(endpoint, options)
      const result = await response.json()
      if (result.data) {
        router.push('/submitted')
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <Layout>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y divide-gray-200 dark:divide-gray-500"
        >
          <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-500 sm:space-y-5">
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
              <div>
                {/* TEST CODE FOR CARD 1! */}
                <Stack direction="row" spacing={2} sx={{ padding: '2rem' }}>
                  <CardOne
                    title="Excellence"
                    description="Striving for professional excellence means taking an uncompromising approach to the service we endeavor to provide. We ensure the utmost quality in what we deliver."
                    icon={<AccessibilityIcon fontSize="large" sx={{color:"white"}}/>}/>
                  <CardOne
                    title="Efficacy"
                    description="What we do will have impact. We will apply the pareto principle (and other frameworks) to ensure that we are optimizing our efforts at every step in our process from engagement to delivery."
                    icon={<AllInclusiveIcon fontSize="large" sx={{color:"white"}}/>}
                    buttonText="Learn more"/>
                  <CardOne
                    description="We work with an eye toward maintaining a steady and speedy cadence whenever possible. We don't sacrifice quality, but we work with an MLP (minimum loveable product) mindset."
                    icon={<AddTaskIcon fontSize="large" sx={{color:"white"}}/>}
                    buttonText="Volunteer with us"/>
                </Stack>
                {/* END OF TEST CODE */}
                <h3 className="text-lg font-medium leading-6">
                  Partner Interest Form
                </h3>
                <p className="mt-1 max-w-prose text-sm text-gray-500 dark:text-gray-300">
                  Thank you for your interest in Open Seattle! We are excited to
                  learn more about your needs to determine if we can lend a
                  hand.
                </p>
                <p className="mt-1 max-w-prose text-sm text-gray-500 dark:text-gray-300">
                  Fill out this form and a member of our team will be in touch
                  regarding next steps.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <TextFormGroup
                  label="First Name"
                  name="fldey7E1oWw918Hzf"
                  autoComplete="given-name"
                  register={register}
                  required
                />

                <TextFormGroup
                  label="Last Name"
                  name="fldLtpSgtaU6Mlwkt"
                  autoComplete="family-name"
                  register={register}
                  required
                />

                <TextFormGroup
                  label="Email Address"
                  name="fldeQMuz3Xhpwsz7l"
                  autoComplete="email"
                  placeholder="example@example.com"
                  expand
                  register={register}
                  required
                />
                <TextFormGroup
                  label="Phone Number"
                  name="fldJVwNWaCfP7KiHi"
                  autoComplete="phone"
                  placeholder="555-123-4567"
                  register={register}
                />

                <TextFormGroup
                  label="Organization"
                  name="fld7zzcuREp0DTvMp"
                  autoComplete="organization"
                  helperText="Which organization or department do you represent?"
                  expand
                  register={register}
                />

                <TextFormGroup
                  label="Role"
                  name="fld7fFxMvnxXUMxcd"
                  autoComplete="role"
                  helperText="What is your role within the organization?"
                  expand
                  register={register}
                />

                <SelectInputGroup
                  label="Organization Type"
                  name="fldjgeS16ABXj2Zvu"
                  options={[
                    'Nonprofit',
                    'Government Agency',
                    'Community Organization',
                    'For-profit Company',
                  ]}
                  register={register}
                />

                <TextFormGroupWithAddon
                  label="Organization Website"
                  name="fldoEGHOEL3oi4Ucb"
                  addon="https://"
                  expand
                  register={register}
                />

                <TextFormGroup
                  label="Project Title"
                  name="fldndoyRHbb5GnSCm"
                  helperText="If the proposed project has a name, please place it here."
                  register={register}
                />
                <TextAreaFormGroup
                  label="Project Details"
                  name="fldKBGnuGaq2VlIoN"
                  helperText="Please provide any details about the project that you can provide. This will help us determine whether we can support your project and the types of volunteers we may provide."
                  expand
                  register={register}
                />
              </div>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="inline-flex rounded-md bg-gray-800/80 px-3.5 py-1.5 font-body text-base font-semibold leading-7 text-white shadow-sm transition-all hover:bg-indigo-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-gray-500/60 hover:dark:bg-gray-600 hover:dark:shadow-lg"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex rounded-md bg-indigo-800/80 px-3.5 py-1.5 font-body text-base font-semibold leading-7 text-white shadow-sm transition-all hover:bg-indigo-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-indigo-500/80 hover:dark:bg-indigo-600 hover:dark:shadow-lg"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Container>
    </Layout>
  )
}
