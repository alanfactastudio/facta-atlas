import Head from 'next/head';
import { Header, Footer } from 'components';
import { client } from 'client';

export default function Team() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();
  const teamMembers = useQuery().teamMembers()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Team Members</h2>

          {teamMembers.map((team) => (
            <TeamMember key={teamMember.id} teamMember={teamMember} />
          ))}

        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}